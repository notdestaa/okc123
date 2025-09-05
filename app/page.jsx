"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

const players = [
  { id: 1, name: "LeBron James", sport: "NBA" },
  { id: 2, name: "Patrick Mahomes", sport: "NFL" },
  { id: 3, name: "Lionel Messi", sport: "Soccer" },
  { id: 4, name: "Shohei Ohtani", sport: "MLB" },
];

export default function Page() {
  const [query, setQuery] = useState("");
  const filteredPlayers = players.filter((p) =>
    p.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <main className="min-h-screen bg-blue-50 p-6 flex flex-col items-center gap-6">
      <h1 className="text-3xl font-bold text-black">DFS Demo App</h1>
      <Card className="w-full max-w-md">
        <h2 className="text-xl font-semibold mb-4">Pick a Player</h2>
        <Input
          placeholder="Search player..."
          className="mb-4"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <div className="flex flex-col gap-3">
          {filteredPlayers.map((player) => (
            <Card key={player.id} className="p-3 flex justify-between items-center">
              <span>{player.name} ({player.sport})</span>
              <div className="flex gap-2">
                <Button>More</Button>
                <Button className="bg-blue-500 hover:bg-blue-700">Less</Button>
              </div>
            </Card>
          ))}
        </div>
      </Card>
    </main>
  );
}
