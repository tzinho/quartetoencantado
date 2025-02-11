"use client";

import { useState } from "react";

import { z } from "zod";
import { useToast } from "@/hooks/use-toast";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { sendEmail } from "@/actions/resend";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  name: z.string(),
  email: z.string().email(),
  message: z.string(),
});

export const Contact = () => {
  const form = useForm({
    resolver: zodResolver(schema),
  });

  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    await sendEmail(formData);

    toast({
      title: "Mensagem enviada com sucesso!",
      description: "Vamos entrar em contato em breve!",
    });

    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="py-20 bg-kiddy-light">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl mb:text-5xl font-bold text-center mb-12 text-kiddy-purple font-[family-name:var(--font-title)]">
            Entre em contato
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <Input
              placeholder="Seu nome"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              className="w-full"
            />
            <Input
              type="email"
              placeholder="Seu email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className="w-full"
            />
            <Textarea
              placeholder="Sua mensagem"
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              className="w-full"
            />
            <Button
              type="submit"
              className="w-full bg-kiddy-purple text-white hover:bg-kiddy-pink"
            >
              Enviar
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};
