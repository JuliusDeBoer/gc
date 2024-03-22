<x-layout>

<x-slot:title>
    Geheime pagina ga weg! | Legoland Doetinchem
</x-slot>

<h1 class="text-3xl">Tickets!</h1>

@if ($success ?? false)
    <div class="rounden border border-green-800 bg-green-100 m-8 p-8">
        <p>Bedankt voor het bestellen! U krijgt zo snel mogelijk een email van ons!</p>
    </div>
@endif

<form method="POST" action="{{ url("/tickets") }}">
    @csrf

    <div class="flex justify-center items-center">
        @foreach ($tickets as $ticket)
            <div class="bg-slate-100 m-8 p-8 rounded flex flex-col justify-center items-center w-52 h-64">
                <h2 class="text-2xl">{{$ticket->name}}</h1>
                <hr class="border-black border w-full" />
                <p>{{$ticket->description}}</p>
                <input type="number" value="0" min="0" name="tickets-{{$ticket->id}}">
            </div>
        @endforeach
    </div>

    <div class="flex flex-col justify-center items-center">
        <input type="email" name="email" class="border rounded m-2" placeholder="Email">
        <button type="submit" class="border rounded m-2">Purchase</button>
    </div
</form>
</x-layout>
