export default function Header() {
    return (
        <div className="w-[70%] mx-auto border pb-5">
            {/* Imagen fondo */}
            <div className="h-32 border"></div>

            {/* Imagen perfil */}
            <div className="grid grid-cols-4 px-10">
                <div className="mt-[-3em] mx-auto col-span-1">
                    <img className="w-28 h-28 rounded-full" src="https://img.freepik.com/vector-premium/diseno-avatar-persona_24877-38133.jpg?w=2000" alt="Rounded avatar" />
                </div>

                <div className="col-span-3 py-3">
                    <h2 className="text-2xl font-semibold">Random name</h2>
                    <p className="mt-2">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam consequatur voluptates ducimus eos laudantium! Adipisci deleniti facilis non? Quod ratione eum cum ex provident mollitia error accusamus cupiditate aliquid impedit.
                    </p>
                </div>

            </div>

        </div>
    )
}