import { bgcolor } from "../settings/bgcolor";
import { border } from "../settings/border";
import { flexbox } from "../settings/flexbox";
import { font } from "../settings/font";
import { grid } from "../settings/grid";
import { rounded } from "../settings/rounded";
import { margin, padding } from "../settings/sizing";
import { maxwidth } from "../settings/width";

export function container(title?: string, description?: string) {
    return {
        type: "object",
        name: "container",
        label: title || "Container Settings",
        description: description || "Stylize the container of this content.",
        // fields: [bgcolor()],
        fields: [
            bgcolor(),
            maxwidth(),
            border(),
            rounded(),
            margin(),
            padding(),
            grid(),
            flexbox(),
            font(),
        ],
    };
}
