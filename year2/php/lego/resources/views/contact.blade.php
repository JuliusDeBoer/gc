<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Contact us</title>
        @vite('resources/css/app.css')
    </head>
    <body>
        <img src="{{ Vite::asset('resources/images/contact-us.png') }}" class="h-72 w-full object-cover object-center" />
        <div class="text-3xl font-semibold flex justify-center items-center w-full h-24">
            <h1>Contact us</h1>
        </div>
        <div class="container mx-auto">
            <ul>
                <li>Groot Hagen 6, 7009 AM Doetinchem</li>
            </ul>
        </div>
    </body>
</html>
