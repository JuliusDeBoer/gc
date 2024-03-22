<?php

use App\Http\Controllers\AttractionController;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\TicketController;
use App\Http\Controllers\MiscController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
 */

Route::get('/', [MiscController::class,'index']);
Route::get('/contact-us', [ContactController::class, 'index']);
Route::post('/contact-us', [ContactController::class, 'create']);
Route::get('/attractions', [AttractionController::class, 'index']);
Route::get('/attractions/new', [AttractionController::class, 'new']);
Route::post('/attractions/new', [AttractionController::class, 'create']);
Route::get('/attractions/images/{name}', [AttractionController::class, 'image']);
Route::get('/attractions/{id}', [AttractionController::class, 'show']);
Route::get('/tickets', [TicketController::class, 'index']);
Route::post('/tickets', [TicketController::class, "create"]);
Route::get('/opening-hours', [MiscController::class,'openingHours']);