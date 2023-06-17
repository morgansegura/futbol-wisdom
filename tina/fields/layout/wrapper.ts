import { bgcolor } from "../settings/bgcolor";
import { rounded } from "../settings/rounded";
import { margin, padding, spacing } from "../settings/sizing";
import { maxwidth } from "../settings/width";

export function wrapper(title?: string, description?: string) {
    return {
        type: "object",
        name: "wrapper",
        label: title || "Wrapper Settings",
        description: description || "Stylize the wrapper of this content.",
        fields: [bgcolor(), maxwidth(), margin(), padding(), rounded()],
        // fields: [bgcolor()],
    };
}
