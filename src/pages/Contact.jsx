import React from "react";
import { Card, CardContent } from "/components/ui/card";
import { Button } from "/components/ui/button";

export default function Contact() {
  return (
    <Card className="rounded-2xl shadow max-w-xl mx-auto">
      <CardContent className="p-4 text-center">
        <h2 className="text-xl font-semibold mb-2">Kontakt</h2>
        <Button className="mt-2">Kontakt mig</Button>
      </CardContent>
    </Card>
  );
}
