export const Footer = () => {
  return (
    <footer className="bg-kiddy-purple text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Quarteto encantado</h3>
            <p className="text-sm">Aqui é onde a diversão começa</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Links</h3>
            <ul className="space-y-2">
              <li>Sobre nós</li>
              <li>Nossos serviços</li>
              <li>Entre em contato</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Informações de contato</h3>
            <ul className="space-y-2">
              <li>
                <a href="tel:11990114270">📞 (11) 99011-4270</a>
              </li>
              <li>
                <a href="tel:11954218952">📞 (11) 95421-8952</a>
              </li>
              <li>
                <a href="mailto:quarteto.encantado2024@gmail.com?subject=Contratação de serviços">
                  ✉️ quarteto.encantado2024@gmail.com
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Siga-nos</h3>
            <div className="flex space-x-4">
              <a className="cursor-pointer">📱</a>
              <a className="cursor-pointer">👥</a>
              <a
                className="cursor-pointer"
                href="https://www.instagram.com/quarteto.encantado_/"
                target="_blank"
              >
                📸
              </a>
            </div>
          </div>
        </div>
        <div className="text-center mt-8 pt-8 border-t border-white/20">
          <p>&copy; 2025 Quarteto encantado. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};
