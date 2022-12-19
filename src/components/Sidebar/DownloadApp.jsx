import { Icon } from "Icons"

export default function DownloadApp() {
  return (
    <div className="h-10 flex flex-shrink-0 text-link text-sm font-semibold hover:text-white  items-center px-6 gap-x-4">
        <Icon name='download' size={20} />
        Uygulamayı Yükle
    </div>
  )
}
