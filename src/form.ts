export const field = {
    name: 'entry.1897467811',
    email: 'entry.688833784',
    phone: 'entry.1520117484',
    description: 'entry.1719670926'
}

export const endpoint = 'https://cors-anywhere.herokuapp.com:443/https://docs.google.com/forms/u/2/d/e/1FAIpQLSd_sC_px-nKqW5CLsBqlIzvBMh9bh1jBXvNa9bFm3io0smf4w/formResponse';

export async function send(name: string, email: string, phone: string, description: string) {
    const body = new FormData();
    body.append(field.email, email);
    body.append(field.name, name);
    body.append(field.phone, phone);
    body.append(field.description, description);

    return fetch(endpoint, {
        method: 'POST',
        body
    });
}
