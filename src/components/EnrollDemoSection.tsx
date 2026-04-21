import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { GraduationCap, Loader2 } from "lucide-react";

const GOOGLE_FORM_ACTION =
  "https://docs.google.com/forms/d/e/1FAIpQLScGX3OKUBUwDKLRf18ArLuNqPCcvIulsnVMIJWO9uV8_2RoXg/formResponse";

const FIELDS = {
  name: "entry.1141012009",
  email: "entry.876061360",
  mobile: "entry.1093275139",
};

const EnrollDemoSection = () => {
  const { toast } = useToast();
  const [submitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", mobile: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.mobile) {
      toast({ title: "Missing details", description: "Please fill all fields.", variant: "destructive" });
      return;
    }
    setSubmitting(true);
    try {
      const body = new FormData();
      body.append(FIELDS.name, form.name);
      body.append(FIELDS.email, form.email);
      body.append(FIELDS.mobile, form.mobile);

      // Google Forms doesn't return CORS headers; use no-cors fire-and-forget.
      await fetch(GOOGLE_FORM_ACTION, {
        method: "POST",
        mode: "no-cors",
        body,
      });

      toast({
        title: "Enrollment received! 🎉",
        description: "We'll reach out shortly with demo details.",
      });
      setForm({ name: "", email: "", mobile: "" });
    } catch {
      toast({
        title: "Something went wrong",
        description: "Please try again or contact us on WhatsApp.",
        variant: "destructive",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section
      id="enroll-demo"
      className="py-20 bg-gradient-to-br from-primary/5 via-background to-accent/5"
      aria-labelledby="enroll-demo-heading"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 text-primary mb-4">
              <GraduationCap className="w-7 h-7" />
            </div>
            <h2
              id="enroll-demo-heading"
              className="text-3xl md:text-4xl font-bold text-foreground mb-3"
            >
              Enroll to our Demo
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Reserve your spot for a free live demo session. Fill in your details and our team will get in touch.
            </p>
          </div>

          <Card className="p-6 md:p-8 shadow-lg border-border/60">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="space-y-2">
                <Label htmlFor="demo-name">Full Name</Label>
                <Input
                  id="demo-name"
                  type="text"
                  placeholder="Your full name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  required
                  disabled={submitting}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <Label htmlFor="demo-email">Email</Label>
                  <Input
                    id="demo-email"
                    type="email"
                    placeholder="you@example.com"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    required
                    disabled={submitting}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="demo-mobile">Mobile Number</Label>
                  <Input
                    id="demo-mobile"
                    type="tel"
                    inputMode="tel"
                    pattern="[0-9+\-\s]{7,15}"
                    placeholder="+91 90000 00000"
                    value={form.mobile}
                    onChange={(e) => setForm({ ...form, mobile: e.target.value })}
                    required
                    disabled={submitting}
                  />
                </div>
              </div>

              <Button type="submit" size="lg" className="w-full" disabled={submitting}>
                {submitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  "Enroll for Demo"
                )}
              </Button>

              <p className="text-xs text-muted-foreground text-center">
                Your details are securely submitted to our enrollment form.
              </p>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default EnrollDemoSection;
