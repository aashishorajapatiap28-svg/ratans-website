import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";

const QuizSection = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [showResult, setShowResult] = useState(false);

  const questions = [
    {
      question: "How often do you cook rice?",
      options: [
        "Daily - I'm a rice enthusiast",
        "Weekly - Regular home cooking",
        "Occasionally - Special occasions",
        "Rarely - But when I do, it should be perfect"
      ]
    },
    {
      question: "What type of dishes do you prefer?",
      options: [
        "Traditional biryanis and pulavs",
        "Simple steamed rice with curry",
        "Festive and special occasion dishes",
        "Quick and easy everyday meals"
      ]
    },
    {
      question: "What's most important to you in rice?",
      options: [
        "Exceptional aroma and taste",
        "Consistent quality and texture",
        "Value for money",
        "Premium quality regardless of price"
      ]
    }
  ];

  const personalities = [
    {
      type: "Perfectionist",
      description: "You seek the finest quality and are willing to pay for excellence. Premium rice varieties suit your discerning taste.",
      products: ["Super Basmati Rice", "Tibar Basmati Rice"],
      color: "bg-gradient-luxury"
    },
    {
      type: "Quality Seeker",
      description: "You value consistent quality and rich flavor. You prefer well-balanced rice that delivers great results every time.",
      products: ["Classic Basmati Rice", "Dubar Basmati Rice"],
      color: "bg-gradient-primary"
    },
    {
      type: "Taste Champion",
      description: "Flavor is your priority. You love rice that enhances your dishes with authentic aroma and taste.",
      products: ["Biryani Basmati Rice", "Feast Rozzana Basmati Rice"],
      color: "bg-gradient-hero"
    },
    {
      type: "Smart Shopper",
      description: "You want quality rice that offers great value. You prefer practical choices that don't compromise on taste.",
      products: ["Daily Delight Basmati Rice", "Everyday Basmati Rice"],
      color: "bg-accent"
    }
  ];

  const handleAnswer = (answerIndex: number) => {
    const newAnswers = [...answers, answerIndex];
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  const getPersonality = () => {
    const answerSum = answers.reduce((sum, answer) => sum + answer, 0);
    const avgAnswer = answerSum / answers.length;
    
    if (avgAnswer <= 1) return personalities[0]; // Perfectionist
    if (avgAnswer <= 2) return personalities[1]; // Quality Seeker  
    if (avgAnswer <= 2.5) return personalities[2]; // Taste Champion
    return personalities[3]; // Smart Shopper
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setShowResult(false);
  };

  if (showResult) {
    const personality = getPersonality();
    
    return (
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <Card className="max-w-2xl mx-auto shadow-luxury">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl font-bold text-foreground mb-4">
                Your Rice Personality
              </CardTitle>
              <div className={`${personality.color} text-white p-6 rounded-lg mb-4`}>
                <h3 className="text-2xl font-bold mb-2">{personality.type}</h3>
              </div>
            </CardHeader>
            <CardContent className="text-center space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                {personality.description}
              </p>
              
              <div>
                <h4 className="text-xl font-semibold text-foreground mb-4">
                  Recommended Products:
                </h4>
                <div className="flex flex-wrap justify-center gap-2">
                  {personality.products.map((product, index) => (
                    <Badge key={index} variant="outline" className="text-sm py-1 px-3">
                      {product}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="luxury" size="lg">
                  Explore Recommended Products
                </Button>
                <Button variant="elegant" size="lg" onClick={resetQuiz}>
                  Retake Quiz
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Your Choice Defines Who You Are
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground">
            Discover your unique rice personality with our interactive quiz
          </p>
        </div>

        <Card className="max-w-2xl mx-auto shadow-card">
          <CardHeader>
            <div className="flex justify-between items-center mb-4">
              <CardTitle className="text-xl text-foreground">
                Question {currentQuestion + 1} of {questions.length}
              </CardTitle>
              <Badge variant="outline">
                {Math.round(((currentQuestion + 1) / questions.length) * 100)}%
              </Badge>
            </div>
            <div className="w-full bg-muted rounded-full h-2">
              <div 
                className="bg-gradient-primary h-2 rounded-full transition-all duration-300"
                style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
              ></div>
            </div>
          </CardHeader>
          
          <CardContent className="space-y-6">
            <h3 className="text-xl font-semibold text-foreground text-center">
              {questions[currentQuestion].question}
            </h3>
            
            <div className="space-y-3">
              {questions[currentQuestion].options.map((option, index) => (
                <Button
                  key={index}
                  variant="elegant"
                  className="w-full p-4 h-auto text-left justify-start"
                  onClick={() => handleAnswer(index)}
                >
                  <span className="text-wrap">{option}</span>
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default QuizSection;