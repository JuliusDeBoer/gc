<?php

namespace App\Http\Controllers;
use App\Models\Message;
use Illuminate\Http\Request;

class ContactController extends Controller
{
    public function index()
    {
        return view('contact');
    }

    public function create(Request $request)
    {
        $this->validate($request, [
            'email'=> 'required|email',
            'content'=> 'required:min:3',
        ]);

        Message::create([
            "email" => $request->email,
            "content" => $request->content
        ]);

        return view('contact', ["success" => true]);
    }
}
