export const login = async (email, password) => {
    const response = await fetch('https://api.example.com/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
    });
    if (!response.ok) throw new Error('Error al inicar sesión');
    return response.json();
}