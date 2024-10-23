"use client";
import React from "react";
import {
  TextRevealCard,
} from "../ui/text-reveal-card";

export function TextRevealCardPreview() {
  return (
    (<div
      className="w-full">
      <TextRevealCard text="Ahmed Abo-Raya" revealText="Ahmed Mahmoud" />
    </div>)
  );
}
