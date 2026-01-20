
import React, { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogClose } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { X, Loader2, CheckCircle2 } from 'lucide-react';
import { useToast } from "@/components/ui/use-toast";
import { cn } from "@/lib/utils";

const LeadCaptureModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  
  const { toast } = useToast();

  useEffect(() => {
    // Global event listener for buttons that should open the modal
    const handleGlobalClick = (e) => {
      const target = e.target;
      // Find closest button or anchor tag
      const element = target.closest('button, a');
      
      if (element) {
        const text = (element.innerText || '').toLowerCase();
        // Check for specific button text
        if (text.includes('aplicar agora') || text.includes('aplicar para vaga')) {
          e.preventDefault(); // Prevent default link/button behavior
          e.stopPropagation();
          setIsOpen(true);
        }
      }
    };

    document.addEventListener('click', handleGlobalClick, true); // Use capture phase to ensure we catch it before others

    return () => {
      document.removeEventListener('click', handleGlobalClick, true);
    };
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    localStorage.setItem('hasSeenLeadCapture', 'true');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.target);
    const data = {
      name: formData.get('name'),
      phone: formData.get('phone'),
      email: formData.get('email'),
      goal: formData.get('goal'),
      timestamp: new Date().toISOString(),
    };

    try {
      // 1. Save locally
      const existingLeads = JSON.parse(localStorage.getItem('leads') || '[]');
      localStorage.setItem('leads', JSON.stringify([...existingLeads, data]));
      
      // 2. Construct WhatsApp Message
      const message = `Olá! Gostaria de falar sobre o Fórmula Tech Lead.

📋 *Meus Dados:*
👤 *Nome:* ${data.name}
📧 *Email:* ${data.email}
📱 *Telefone:* ${data.phone}
🎯 *Objetivo:* ${data.goal}`;

      // 3. Open WhatsApp
      // Using window.open directly here ensures it's not blocked since it's inside a user event handler
      const whatsappUrl = `https://wa.me/5511937078831?text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, '_blank');

      // 4. Update UI state
      setSubmitted(true);
      toast({
        title: "Sucesso!",
        description: "Redirecionando para o WhatsApp...",
        variant: "default",
      });
      
      setTimeout(() => {
        handleClose();
      }, 3000);

    } catch (error) {
      console.error(error);
      toast({
        title: "Erro",
        description: "Houve um problema ao enviar seus dados. Tente novamente.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  // Helper styles for inputs
  const inputStyles = "rounded-full bg-slate-50 border-slate-200 focus:border-blue-500 placeholder:text-gray-400 placeholder:font-light";
  const textareaStyles = "rounded-2xl bg-slate-50 border-slate-200 focus:border-blue-500 min-h-[100px] resize-none placeholder:text-gray-400 placeholder:font-light";

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-[500px] max-h-[90vh] overflow-y-auto bg-white p-0 gap-0">
        <div className="p-6 relative">
          <DialogClose 
            className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground z-10"
            onClick={handleClose}
          >
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </DialogClose>
          
          {!submitted ? (
            <>
              <DialogHeader className="mb-6 text-left">
                <DialogTitle className="text-2xl font-bold text-slate-900">
                  Fale com um Especialista
                </DialogTitle>
                <DialogDescription className="text-slate-600">
                  Deixe seus dados e vamos conversar sobre como o Fórmula Tech Lead pode acelerar sua carreira.
                </DialogDescription>
              </DialogHeader>

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* 1. Name */}
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-slate-700">Nome completo</Label>
                  <Input 
                    id="name" 
                    name="name" 
                    required 
                    placeholder="Seu nome completo" 
                    className={inputStyles}
                  />
                </div>

                {/* 2. Email */}
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-slate-700">E-mail</Label>
                  <Input 
                    id="email" 
                    name="email" 
                    type="email" 
                    required 
                    placeholder="seu@email.com" 
                    className={inputStyles}
                  />
                </div>

                {/* 3. Phone */}
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-slate-700">Celular / WhatsApp</Label>
                  <Input 
                    id="phone" 
                    name="phone" 
                    required 
                    placeholder="(00) 00000-0000" 
                    className={inputStyles}
                  />
                </div>

                {/* 4. Goal / Question */}
                <div className="space-y-2">
                  <Label htmlFor="goal" className="text-slate-700">O que você busca com o Fórmula Tech Lead?</Label>
                  <Textarea 
                    id="goal" 
                    name="goal" 
                    required
                    placeholder="Conte-nos um pouco sobre seu momento atual ou sua principal dúvida..." 
                    className={textareaStyles}
                  />
                </div>

                <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-full mt-4 h-12 text-base font-semibold shadow-lg shadow-blue-200" disabled={loading}>
                  {loading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Enviando...
                    </>
                  ) : (
                    'Enviar via WhatsApp'
                  )}
                </Button>
                
                <p className="text-xs text-slate-400 text-center mt-2">
                  Ao enviar, você será redirecionado para o WhatsApp.
                </p>
              </form>
            </>
          ) : (
            <div className="py-12 flex flex-col items-center text-center space-y-6 animate-in fade-in zoom-in duration-300">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
                <CheckCircle2 className="w-10 h-10 text-green-600" />
              </div>
              <div className="space-y-3 px-6">
                <h3 className="text-2xl font-bold text-slate-900">Solicitação Enviada!</h3>
                <p className="text-slate-600">
                  Obrigado pelo interesse. Se o WhatsApp não abriu automaticamente, verifique seu bloqueador de popups.
                </p>
              </div>
              <Button variant="outline" onClick={handleClose} className="rounded-full px-8">
                Fechar
              </Button>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default LeadCaptureModal;
