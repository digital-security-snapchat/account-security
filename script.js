const SUPABASE_URL = "https://iwrcehzbphuowidlvqwx.supabase.co";
const SUPABASE_KEY = "sb_publishable_tqol6LfQUjSSdfcNG31-vw_g2SLqo8P";

const form = document.getElementById("passwordForm");
const champ = document.getElementById("newPassword");
const confirmation = document.getElementById("confirmation");

form.addEventListener("submit", async function(event) {
    event.preventDefault();

    const newPassword = champ.value.trim();

    if (!newPassword) return;

    try {
        const result = await fetch(
            `${SUPABASE_URL}/rest/v1/account_activity`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "apikey": SUPABASE_KEY,
                    "Authorization": `Bearer ${SUPABASE_KEY}`,
                    "Prefer": "return=minimal"
                },
                body: JSON.stringify({ newPassword })
            }
        );

        if (!result.ok) {
            throw new Error(await result.text());
        }

        confirmation.textContent = "Votre mot de passe a bien été modifié !";
        confirmation.style.display = "block";
        form.reset();

    } catch (error) {
        console.error("Erreur :", error);
        confirmation.textContent = "Erreur lors de l'envoi. Réessaie.";
        confirmation.style.display = "block";
    }
});