import React from "react";
import { Card, CardContent } from "/components/ui/card";

export default function About() {
  return (
    <Card className="rounded-2xl shadow max-w-xl mx-auto">
      <CardContent className="p-4">
        <h2 className="text-xl font-semibold mb-2">Om mig</h2>
        <p className="text-gray-600">Jeg lærer React og bygger fede ting!</p>
      </CardContent>
    </Card>
  );
}