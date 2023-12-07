import { UserData } from "@/types"

interface Props {
    streamer?: UserData
}

export default function Header({streamer}: Props) {
    return (
        <div className="w-[70%] mx-auto border pb-5">
            {/* Imagen fondo */}
            <div
                className="h-32 border bg-contain"
                style={{backgroundImage: `url(${streamer?.offline_image_url})`}}
            ></div>

            {/* Imagen perfil */}
            <div className="grid grid-cols-4 px-10">
                <div className="mt-[-3em] mx-auto col-span-1">
                    <img
                        className="w-28 h-28 rounded-full"
                        src={streamer?.profile_image_url}
                        alt={`Avatar de ${streamer?.display_name}`}
                    />
                </div>

                <div className="col-span-3 py-3">
                    <h2 className="text-2xl font-semibold">{streamer?.display_name}</h2>
                    <p className="mt-2">
                        {streamer?.description}
                    </p>
                </div>

            </div>

        </div>
    )
}