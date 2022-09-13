// Small and dumb slugify. It's not a full slugify implementation, but it's enough for our needs.
export const slugify = (msg: string): string => {
    return msg.normalize("NFD").replace(/[^\x20-\x7E]/g, "")
    .replace(/[\s/\\]/g, "-")
    .replace(/[^a-zA-Z0-9\-]/g, "")
    .replace(/[-]{2,}/g, "-")
    .toLowerCase();
}
