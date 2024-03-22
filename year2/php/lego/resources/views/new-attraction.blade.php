<x-layout>

<x-slot:title>
    Legoland Doetinchem
</x-slot>

    <h1>Create a new attraction</h1>

@if ($errors->any())
    <div class="p-2 border border-red-600 bg-red-100 rounded">
        <ul>
            @foreach ($errors->all() as $error)
                <li>{{ $error }}</li>
            @endforeach
        </ul>
    </div>
@endif

    <form method="POST" enctype="multipart/form-data" action="{{ url("/attractions/new") }}">
        @csrf
        <input type="text" name="title" class="border rounded m-2" placeholder="Titel"></input>
        <br />
        <textarea name="content" class="border rounded m-2" placeholder="Omschrijving"></textarea>
        <br />
        <input type="file" name="image" />
        <br />
        <button type="submit" class="border rounded m-2">Submit</button>
    </form>

</x-layout>
