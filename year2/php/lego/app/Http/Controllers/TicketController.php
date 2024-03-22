<?php

namespace App\Http\Controllers;
use App\Models\Order;
use App\Models\OrderLine;
use App\Models\Ticket;
use Illuminate\Http\Request;

class TicketController extends Controller
{
    public function index()
    {
        return view("tickets", ["tickets" => Ticket::all()->all()]);
    }

    public function create(Request $request)
    {
        $tickets = Ticket::all()->all();

        $order = Order::create([
            "email" => $request->email,
        ]);

        $id = $order["id"];

        // Create orderlines
        foreach($tickets as $ticket)
        {
            $amount = $request["tickets-" . $ticket->id];

            if($amount <= 0) {
                continue;
            }

            OrderLine::create([
                "order" => $id,
                "ticket" => $ticket["id"],
                "amount" => $amount
            ]);
        }

        return view("tickets", ["tickets" => Ticket::all()->all(), "success" => true]);
    }
}
