<x-layout>

<x-slot:title>
    Atracties | Legoland Doetinchem
</x-slot>

<div class="flex flex-wrap justify-evenly">
    @foreach ($attractions as $attraction)
        <a href="{{ url("attractions/" . $attraction->id) }}">
            <div class="w-80">
                <img src="{{ url("attractions/images/" . $attraction->image) }}" />
                <h2 class="w-full text-center text-2xl">{{$attraction->title}}</h2>
            </div>
        </a>
    @endforeach
</div>

</x-layout>
