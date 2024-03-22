<?php

namespace App\Http\Controllers;

use App\Models\Attraction;
use Illuminate\Http\Request;
use Storage;

class AttractionController extends Controller
{
    public function index()
    {
        return view("all-attractions", ["attractions" => Attraction::all()->all()]);
    }

    public function show(string $id)
    {
        if(!is_numeric($id)) {
            abort(400); // Bad Request
        }

        $attraction = Attraction::find((int)$id);

        if(!isset($attraction))
        {
            abort(404); // Not Found
        }

        // dd($attraction->all()[0]);

        return view('attraction', ['attraction' => $attraction]);
    }

    public function image(string $name)
    {
        $file = Storage::drive('ftp')->get($name);

        return $file;
    }

    public function new()
    {
        return view('new-attraction');
    }

    public function create(Request $request)
    {
        $this->validate($request, [
            'title'=> 'required|min:3',
            'content'=> 'required',
            "image" => "required|file|mimes:jpeg,png,jpg,bmp,svg|max:65536" // 64Mb
        ]);

        $file = $request->file('image');

        $filename = $file->hashName();

        Storage::disk('ftp')->put($filename, fopen($file, "r+"));

        Attraction::create([
            'title' => $request->title,
            'content' => $request->content,
            'image' => $filename
        ]);

        return redirect('/attractions/new');
    }
}
