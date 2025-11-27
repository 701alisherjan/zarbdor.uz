import { SOCIAL_ICONS } from "@/constants";

export default function Footer() {
  return (
    <footer className="w-full border-t border-gray-200 dark:border-gray-700 dark:bg-gray-900 dark:text-white">
      <div className="max-w-7xl mx-auto py-10 px-5 flex flex-col lg:flex-row justify-between gap-10">
        <div className="flex flex-col gap-5">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 flex items-center">
              <img
                src="https://png.pngtree.com/png-vector/20230209/ourmid/pngtree-letter-z-logo-png-image_6590691.png"
                alt="Zarbdor.uz"
                className="h-7 w-auto"
              />
              <span className="ml-2 font-bold text-lg">ARBDOR.uz</span>
            </div>
          </div>

          <nav className="flex flex-wrap gap-4 md:gap-6 font-semibold dark:text-white">
            <a href="#" className="hover:underline">
              Sayt haqida
            </a>
            <a href="#" className="hover:underline">
              Biznes
            </a>
            <a href="#" className="hover:underline">
              Aloqa
            </a>
            <a href="#" className="hover:underline">
              Arxiv
            </a>
          </nav>

          <p className="text-sm leading-6 max-w-lg">
            ZARBDOR.UZ — ommaviy axborot vositasi sifatida 2018-yil 26-oktabr
            kuni O'zbekiston Respublikasi Prezident Administratsiyasi huzuridagi
            Axborot va ommaviy kommunikatsiyalar agentligida 1089-raqam bilan
            ro'yxatdan o'tgan.
            <br />
            <br />
            Muassis: “ZARBDOR” MChJ.
            <br />
            <br />
            Tahririyat manzili: Jizzax viloyati, Zarbdor MYF.
            <br />
            Elektron pochta: info@zarbdor.uz
          </p>

          <p className="text-xs text-gray-500 mt-5">
            © 2025 Zarbdor - Haqiqat achchiq bo'ladi.
          </p>
        </div>

        <div className="flex flex-col gap-10 lg:items-end">
          <div className="flex flex-wrap gap-5 text-3xl">
            {SOCIAL_ICONS.map(({ id, icon: Icon, link, color }) => (
              <a
                key={id}
                href={link}
                className={`hover:scale-125 transition-all duration-300 ${color} drop-shadow-md`}
                target="_blank"
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
