<x-layout>

<x-slot:title>
    Contact | Legoland Doetinchem
</x-slot>

<div class="text-3xl font-semibold flex justify-center items-center w-full h-24">
    <h1>Contact us</h1>
</div>

@if ($success ?? false)
    <div class="rounden border border-green-800 bg-green-100 m-8 p-8">
        <p>We hebben je bericht ontvangen!</p>
    </div>
@endif

<p>Addres: Groot Hagen 6, 7009 AM Doetinchem</p>

<h2 class="text-2xl m-8">Stuur ons een bericht!</h2>

<form method="POST" action="{{ url("/contact-us") }}">
    @csrf

    <label for="email">Email address</label>
    <input name="email" type="email" class="border rounded m-2" />

    <br />

    <label for="content">Message</label>
    <textarea name="content" class="border rounded m-2"></textarea>

    <br />

    <button type="submit" class="border rounded m-2">Send</button>
</form>
</x-layout>
