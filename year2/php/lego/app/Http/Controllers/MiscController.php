<?php

namespace App\Http\Controllers;

class MiscController extends Controller
{
    public function index()
    {
        return view('welcome');
    }

    public function openingHours()
    {
        return view('opening-hours');
    }
}
