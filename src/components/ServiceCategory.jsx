export default function ServiceCategory({ category }) {
    const Icon = category.icon;

    const colorMap = {
        red: {
            bg: "bg-red-100",
            text: "text-red-600",
            dot: "bg-red-600",
        },
        blue: {
            bg: "bg-blue-100",
            text: "text-blue-600",
            dot: "bg-blue-600",
        },
        purple: {
            bg: "bg-purple-100",
            text: "text-purple-600",
            dot: "bg-purple-600",
        },
        green: {
            bg: "bg-green-100",
            text: "text-green-600",
            dot: "bg-green-600",
        },
    };

    const colors = colorMap[category.color];

    return (
        <div className="flex flex-col h-full">
            {/* Header */}
            <div className="flex items-center gap-4 mb-6">
                <div
                    className={`w-14 h-14 flex items-center justify-center rounded-2xl ${colors.bg} ${colors.text} shadow-sm`}
                >
                    <Icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                    {category.title}
                </h3>
            </div>

            {/* Content */}
            <ul className="space-y-3 text-gray-600 mt-2">
                {category.items.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                        <span
                            className={`mt-2 w-1.5 h-1.5 rounded-full ${colors.dot}`}
                        />
                        <span>{item}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}
