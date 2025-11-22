import { SOCIAL_ICONS } from "@/constants";

export default function Footer() {
  return (
    <footer className="w-full border-t   border-gray-200 dark:border-gray-700 dark:bg-gray-900 dark:text-white  ">
      <div className="max-w-7xl mx-auto py-10 px-5 flex flex-col lg:flex-row justify-between gap-10">
        <div className="flex flex-col gap-5">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 flex items-center">
              <img
                src="https://png.pngtree.com/png-vector/20230209/ourmid/pngtree-letter-z-logo-png-image_6590691.png"
                alt="Zarbdor.uz"
                className="h-7 w-auto"
              />{" "}
              <span>ARBDOR.uz</span>
            </div>
          </div>

          <nav className="flex gap-6 font-semibold  dark:text-white">
            <a href="#">Sayt haqida</a>
            <a href="#">Biznes</a>
            <a href="#">Aloqa</a>
            <a href="#">Arxiv</a>
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

        <div className="flex flex-col gap-10">
          <div className="flex flex-row gap-5 text-3xl">
            {SOCIAL_ICONS.map(({ id, icon: Icon, link, color }) => (
              <a
                key={id}
                href={link}
                className={`hover:scale-150 transition-all duration-500 ${color} drop-shadow-md`}
                target="_blank"
              >
                <Icon />
              </a>
            ))}
          </div>

          <div className="flex flex-col gap-6 items-start">
            <div className="flex gap-3">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoYdy2g2kwE1kJslTy35uMWayAE5iYwg1TlA&s"
                alt="App Store"
                className="h-10"
              />
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSADMTEo4YEurEn-gXFBOfumKYAJMviq-T9ww&s"
                alt="Google Play"
                className="h-10"
              />
              <img
                src="https://consumer.huawei.com/dam/content/dam/huawei-cbg-site/common/mkt/pdp/tablets/matepad-11/new-img/imgs/HUAWEI-MatePad-11-2.svg"
                alt="App Gallery"
                className="h-10"
              />
            </div>

            <span className="border px-4 py-1 rounded text-sm">16+</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
