import { Music, Headset } from "lucide-react";

const TRACKS = [
  {
    id: 1,
    title: "مختارات محمد رويشة",
    artist: "الفن الأطلسي الأصيل",
    src: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/188989381&color=%237c8a71&auto_play=false&hide_related=false&show_comments=false&show_user=true&show_reposts=false&show_teaser=true&visual=true"
  },
  {
    id: 2,
    title: "غرست وردة - رويشة",
    artist: "إبداعات وترية",
    src: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/2229189053&color=%237c8a71&auto_play=false&hide_related=false&show_comments=false&show_user=true&show_reposts=false&show_teaser=true&visual=true"
  },
  {
    id: 3,
    title: "مختارات عائشة مايا",
    artist: "تراث الأطلس المتوسط",
    src: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/696811662&color=%237c8a71&auto_play=false&hide_related=false&show_comments=false&show_user=true&show_reposts=false&show_teaser=true&visual=true"
  },
  {
    id: 4,
    title: "أنغام بويبلان",
    artist: "مختارات مختارة",
    src: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/2229198941&color=%237c8a71&auto_play=false&hide_related=false&show_comments=false&show_user=true&show_reposts=false&show_teaser=true&visual=true"
  }
];

export function MusicSection() {
  return (
    <section id="music" className="py-24 bg-gradient-cream">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="size-16 bg-olive/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <Music className="size-8 text-olive" />
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground font-serif text-olive">الرواق الصوتي للمأوى</h2>
          <p className="mt-4 text-muted-foreground">ألحان من عبق التاريخ وجمال جبال الأطلس المتوسط</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {TRACKS.map((track) => (
            <div key={track.id} className="bg-white p-4 rounded-3xl shadow-sm border border-border hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-4 px-2">
                <Headset className="size-5 text-terracotta" />
                <div>
                  <h3 className="font-bold text-foreground text-sm">{track.title}</h3>
                  <p className="text-xs text-muted-foreground">{track.artist}</p>
                </div>
              </div>
              <div className="rounded-2xl overflow-hidden bg-muted">
                <iframe
                  width="100%"
                  height="160"
                  scrolling="no"
                  frameBorder="no"
                  allow="autoplay"
                  src={track.src}
                ></iframe>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center italic text-muted-foreground text-sm">
          * استمتع بأنغام "لوتار" والقصائد أثناء تصفحك لجمال المأوى
        </div>
      </div>
    </section>
  );
}