import React, { useState } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CheckCircle2, Loader2 } from 'lucide-react';
import { cn } from "@/lib/utils";

const ApplicationDialog = ({ triggerText, productName, variant = "default", className }) => {
  const [step, setStep] = useState('form'); // form, success
  const [loading, setLoading] = useState(false);

  // Check if the trigger text is one of the phrases that should open LeadCaptureModal
  const shouldBeHandledByLeadCaptureModal = triggerText.toLowerCase().includes('aplicar agora') || triggerText.toLowerCase().includes('aplicar para vaga');

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setStep('success');
    }, 1500);
  };

  // Helper styles for inputs
  const inputStyles = "rounded-md bg-slate-50 border-slate-200 focus:border-blue-500 placeholder:text-gray-400 placeholder:font-light";
  const textareaStyles = "rounded-md bg-slate-50 border-slate-200 focus:border-blue-500 min-h-[80px] resize-none placeholder:text-gray-400 placeholder:font-light";
  const selectTriggerStyles = (value) => cn(
    "rounded-md bg-slate-50 border-slate-200 focus:border-blue-500",
    !value ? "text-gray-400 font-light" : "text-slate-900"
  );
  const [area, setArea] = useState("");


  // If the button text is handled by LeadCaptureModal, render a normal button
  // which the LeadCaptureModal's global listener will pick up.
  if (shouldBeHandledByLeadCaptureModal) {
    return (
      <Button variant={variant} size="lg" className={className}>
        {triggerText}
      </Button>
    );
  }

  return (
    <Dialog onOpenChange={(open) => {
      if (!open) {
        // Reset form when closed (optional, maybe better to keep state)
        setTimeout(() => setStep('form'), 300)
      }
    }}>
      <DialogTrigger asChild>
        <Button variant={variant} size="lg" className={className}>
          {triggerText}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
        {step === 'form' ? (
          <>
            <DialogHeader>
              <DialogTitle>Aplicação para {productName}</DialogTitle>
              <DialogDescription>
                Preencha o formulário abaixo para aplicar para esta mentoria exclusiva.
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-6 py-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name">Nome Completo</Label>
                  <Input id="name" required placeholder="Seu nome" className={inputStyles} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Melhor Email</Label>
                  <Input id="email" type="email" required placeholder="seu@email.com" className={inputStyles} />
                </div>
              </div>
              
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="whatsapp">WhatsApp (com DDD)</Label>
                  <Input id="whatsapp" required placeholder="(11) 99999-9999" className={inputStyles} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="area">Área de Atuação em TI</Label>
                  <Select required onValueChange={setArea}>
                    <SelectTrigger className={selectTriggerStyles(area)}>
                      <SelectValue placeholder="Selecione sua área" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="A">A - Desenvolvimento Back-end</SelectItem>
                      <SelectItem value="B">B - Desenvolvimento Front-end</SelectItem>
                      <SelectItem value="C">C - Desenvolvimento Full-stack</SelectItem>
                      <SelectItem value="D">D - Mobile (iOS/Android)</SelectItem>
                      <SelectItem value="E">E - DevOps / SRE / Infra</SelectItem>
                      <SelectItem value="F">F - QA / Testes</SelectItem>
                      <SelectItem value="G">G - Dados / BI / IA</SelectItem>
                      <SelectItem value="H">H - Gestão / Produto / Agilidade</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-4 pt-2 border-t border-slate-100">
                <div className="space-y-2">
                  <Label className="text-base">Descreva de forma clara e objetiva o seu momento atual na área de TI</Label>
                  <Textarea required className={textareaStyles} />
                </div>

                <div className="space-y-2">
                  <Label className="text-base">Por que você acredita que esta Mentoria será importante para você e para o crescimento da sua carreira?</Label>
                  <Textarea required className={textareaStyles} />
                </div>

                <div className="space-y-2">
                  <Label className="text-base">Este é um grupo bem seleto e restrito. Por que eu deveria escolher você entre os interessados?</Label>
                  <Textarea required className={textareaStyles} />
                </div>

                <div className="space-y-2">
                  <Label className="text-base">Caso você seja aceito, o que precisa acontecer ao final do programa para dizer que valeu participar da Mentoria?</Label>
                  <Textarea required className={textareaStyles} />
                </div>
              </div>

              <div className="pt-4 flex justify-end">
                <Button type="submit" size="lg" className="w-full md:w-auto" disabled={loading}>
                  {loading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Enviando...
                    </>
                  ) : (
                    'Enviar Aplicação'
                  )}
                </Button>
              </div>
            </form>
          </>
        ) : (
          <div className="py-12 flex flex-col items-center text-center space-y-6">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
              <CheckCircle2 className="w-8 h-8 text-green-600" />
            </div>
            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-slate-900">Aplicação Enviada!</h3>
              <p className="text-slate-600 max-w-md mx-auto">
                Parabéns pelo primeiro passo! Agende agora a Call de entrevista para avaliar se esta Mentoria é para você ou não é, além de tirar suas dúvidas.
              </p>
            </div>
            <Button className="bg-green-600 hover:bg-green-700 text-white w-full max-w-xs">
              Agendar Call de Entrevista
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default ApplicationDialog;