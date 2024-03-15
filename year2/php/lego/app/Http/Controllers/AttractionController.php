<?php

namespace App\Http\Controllers;

use App\Models\Attraction;

class AttractionController extends Controller
{
    public function show(int $id)
    {
        $attraction = Attraction::where('id', $id)->get();

        if(!isset($attraction[0]))
        {
            abort(404); // Not Found
        }

        return view('attraction', ['attraction' => $attraction[0]]);
    }

    public function new()
    {
        return view('new-attraction');
    }
}
