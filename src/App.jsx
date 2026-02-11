import React, { useState, useEffect } from "react";
import {
  Users,
  Briefcase,
  TrendingUp,
  Heart,
  Star,
  Mail,
  Phone,
  Linkedin,
  Award,
  Target,
  Lightbulb,
  BrickWall,
  Book,
  CookingPot,
  ArrowUp
} from "lucide-react";
import imagem from "./assets/farol_logo.png";

export default function ChurchEntrepreneursHub() {
  const [activeTab, setActiveTab] = useState("todos");
  const [selectedMember, setSelectedMember] = useState(null);
  const [showTop, setShowTop] = useState(false);

useEffect(() => {
  const handleScroll = () => {
    setShowTop(window.scrollY > 300);
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};


  // Dados de exemplo - substitua com seus dados reais
  const members = [
    {
      id: 1,
      name: "João Silva",
      business: "Tech Solutions",
      category: "tecnologia",
      role: "CEO & Fundador",
      description: "Desenvolvimento de software personalizado para empresas",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
      email: "joao@techsolutions.com",
      phone: "(11) 98765-4321",
      linkedin: "linkedin.com/in/joaosilva",
      specialty: "Transformação Digital",
    },
    {
      id: 2,
      name: "Maria Santos",
      business: "Consultoria Estratégica MS",
      category: "consultoria",
      role: "Consultora Empresarial",
      description: "Estratégias de crescimento para pequenas e médias empresas",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
      email: "maria@consultoriams.com",
      phone: "(11) 97654-3210",
      linkedin: "linkedin.com/in/mariasantos",
      specialty: "Gestão Estratégica",
    },
    {
      id: 3,
      name: "Pedro Oliveira",
      business: "Arquitetura & Design PO",
      category: "construcao",
      role: "Arquiteto",
      description: "Projetos arquitetônicos residenciais e comerciais",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
      email: "pedro@arquiteturapo.com",
      phone: "(11) 96543-2109",
      linkedin: "linkedin.com/in/pedrooliveira",
      specialty: "Arquitetura Sustentável",
    },
    {
      id: 4,
      name: "Ana Paula Costa",
      business: "Clínica Vida Plena",
      category: "saude",
      role: "Fisioterapeuta",
      description: "Fisioterapia e reabilitação com foco em qualidade de vida",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop",
      email: "ana@vidaplena.com",
      phone: "(11) 95432-1098",
      linkedin: "linkedin.com/in/anapaulacosta",
      specialty: "Reabilitação Física",
    },
    {
      id: 5,
      name: "Carlos Ferreira",
      business: "Educação Plus",
      category: "educacao",
      role: "Diretor Pedagógico",
      description: "Cursos preparatórios e desenvolvimento pessoal",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
      email: "carlos@educacaoplus.com",
      phone: "(11) 94321-0987",
      linkedin: "linkedin.com/in/carlosferreira",
      specialty: "Educação Corporativa",
    },
    {
      id: 6,
      name: "Juliana Martins",
      business: "Marketing Digital JM",
      category: "marketing",
      role: "Estrategista Digital",
      description: "Gestão de redes sociais e campanhas digitais",
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop",
      email: "juliana@marketingjm.com",
      phone: "(11) 93210-9876",
      linkedin: "linkedin.com/in/julianamartins",
      specialty: "Redes Sociais",
    },
    {
      id: 7,
      name: "Alessandra Rodrigues",
      business: "AR MakeUp",
      category: "saude",
      role: "Maquiadora Profissional",
      description: "Maquiadora profissional para 15 anos, casamentos e ensaios",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq2Gl6njeezB02ndPpzo6BLVQ7F7tj7L8oNg&s",
      email: "alessandra@makeup.com",
      phone: "(51) 99234-6743",
      linkedin: "linkedin.com/in/alessandrarodrigues",
      specialty: "Maquiagem",
    },
  ];

  const categories = [
    { id: "todos", 
      name: "Todos", 
      icon: Users, 
      color: "bg-blue-500" 
    },
    {
      id: "tecnologia",
      name: "Tecnologia",
      icon: Lightbulb,
      color: "bg-purple-500",
    },
    {
      id: "consultoria",
      name: "Consultoria",
      icon: Target,
      color: "bg-green-500",
    },
    {
      id: "construcao",
      name: "Construção",
      icon: BrickWall,
      color: "bg-orange-500",
    },
    { id: "saude", 
      name: "Saúde", 
      icon: Heart, 
      color: "bg-red-500" 
    },
    { id: "educacao", 
      name: "Educação", 
      icon: Book, 
      color: "bg-yellow-500" 
    },
    {
      id: "marketing",
      name: "Marketing",
      icon: TrendingUp,
      color: "bg-pink-500",
    },
    {
      id: "alimentação",
      name: "Alimentação",
      icon: CookingPot,
      color: "bg-red-500",
    }
  ];

  const filteredMembers =
    activeTab === "todos"
      ? members
      : members.filter((member) => member.category === activeTab);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl shadow-lg">
                <img src={imagem} alt="descrição" className="w-16 h-16" />
              </div>

              <div>
                <h1 className="text-3xl font-bold text-gray-900">
                  Empreendedores de Cristo
                </h1>
                <p className="text-gray-600 mt-1">
                  Conectando negócios e propósitos
                </p>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-2 bg-blue-50 px-4 py-2 rounded-lg">
              <Users className="w-5 h-5 text-blue-600" />
              <span className="text-blue-900 font-semibold">
                {members.length} Membros
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <div className="bg-indigo-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Construindo Negócios com Propósito
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Uma comunidade de empreendedores e empresários unidos pela fé,
            compartilhando experiências e criando oportunidades de crescimento
            mútuo.
          </p>
        </div>
      </div>

      {/* Categories Filter */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 mb-8">
        <div className="bg-white rounded-2xl shadow-xl p-6">
          {/* <div className="flex flex-wrap gap-3 justify-center"> */}
          {/* <div className="grid grid-cols-4 gap-3"> */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">


            {categories.map((category) => {
              const Icon = category.icon;
              const isActive = activeTab === category.id;
              return (
                <button
                  key={category.id}
                  onClick={() => setActiveTab(category.id)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-semibold transition-all transform hover:scale-105 ${
                    isActive
                      ? `${category.color} text-white shadow-lg`
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span>{category.name}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Members Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredMembers.map((member) => (
            <div
              key={member.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all transform hover:-translate-y-2 cursor-pointer"
              onClick={() => setSelectedMember(member)}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full shadow-md">
                  <span className="text-sm font-semibold text-gray-700">
                    {member.role}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {member.name}
                </h3>
                <div className="flex items-center space-x-2 mb-3">
                  <Briefcase className="w-4 h-4 text-blue-600" />
                  <p className="text-blue-600 font-semibold">
                    {member.business}
                  </p>
                </div>
                <p className="text-gray-600 mb-4 line-clamp-2">
                  {member.description}
                </p>

                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-3 mb-4">
                  <div className="flex items-center space-x-2">
                    <Star className="w-4 h-4 text-indigo-600" />
                    <span className="text-sm font-semibold text-indigo-900">
                      {member.specialty}
                    </span>
                  </div>
                </div>

                <div className="flex space-x-2">
                  <a
                    href={`mailto:${member.email}`}
                    className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg flex items-center justify-center space-x-2 transition-colors"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Mail className="w-4 h-4" />
                    <span className="text-sm font-semibold">Email</span>
                  </a>
                  <a
                    href={`https://wa.me/55${member.phone.replace(/\D/g, "")}?text=${encodeURIComponent(
                      `Olá ${member.name}! Vi seu perfil no Empreendedores de Cristo e gostaria de conversar sobre seu trabalho na ${member.business}.`,
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg flex items-center justify-center space-x-2 transition-colors"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Phone className="w-4 h-4" />
                    <span className="text-sm font-semibold">WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Member Detail Modal */}
      {selectedMember && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
          onClick={() => setSelectedMember(null)}
        >
          <div
            className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-64 overflow-hidden">
              <img
                src={selectedMember.image}
                alt={selectedMember.name}
                className="w-full h-full object-cover"
              />
              <button
                onClick={() => setSelectedMember(null)}
                className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors"
              >
                <span className="text-2xl leading-none">&times;</span>
              </button>
            </div>

            <div className="p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                {selectedMember.name}
              </h2>
              <p className="text-xl text-blue-600 font-semibold mb-1">
                {selectedMember.business}
              </p>
              <p className="text-gray-600 mb-6">{selectedMember.role}</p>

              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-4 mb-6">
                <div className="flex items-center space-x-2 mb-2">
                  <Star className="w-5 h-5 text-indigo-600" />
                  <span className="font-semibold text-indigo-900">
                    Especialidade
                  </span>
                </div>
                <p className="text-gray-700">{selectedMember.specialty}</p>
              </div>

              <div className="mb-6">
                <h3 className="font-semibold text-gray-900 mb-2">
                  Sobre o Negócio
                </h3>
                <p className="text-gray-600">{selectedMember.description}</p>
              </div>

              <div className="space-y-3">
                <a
                  href={`mailto:${selectedMember.email}`}
                  className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <Mail className="w-5 h-5 text-blue-600" />
                  <span className="text-gray-700">{selectedMember.email}</span>
                </a>

                <a
                  href={`https://wa.me/55${selectedMember.phone.replace(/\D/g, "")}?text=${encodeURIComponent(
                    `Olá ${selectedMember.name}! Vi seu perfil no Empreendedores de Cristo e gostaria de conversar sobre seu trabalho na ${selectedMember.business}.`,
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg flex items-center justify-center space-x-2 transition-colors"
                  onClick={(e) => e.stopPropagation()}
                >
                  <Phone className="w-4 h-4" />
                  <span className="text-sm font-semibold">WhatsApp</span>
                </a>

                <a
                  href={`https://${selectedMember.linkedin}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <Linkedin className="w-5 h-5 text-blue-700" />
                  <span className="text-gray-700">
                    {selectedMember.linkedin}
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 mt-16">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
    <p className="text-gray-400">
      "Cada um administre aos outros o dom como o recebeu, como bons
      despenseiros da multiforme graça de Deus." - 1 Pedro 4:10
    </p>
    <p className="text-gray-500 mt-4">
      © 2026 Empreendedores de Cristo - Todos os direitos reservados
    </p>
  </div>
</footer>

{showTop && (
  <button
    onClick={scrollToTop}
    className="fixed bottom-6 right-6 z-50 bg-blue-600 hover:bg-blue-700 text-white p-1 rounded-full shadow-xl transition-all duration-300 hover:scale-110"
  >
    <ArrowUp className="w-6 h-6" />
  </button>
)}

    </div>
  );
}
