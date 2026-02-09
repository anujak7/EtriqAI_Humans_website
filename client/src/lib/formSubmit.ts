export const FORMSUBMIT_INBOX =
  import.meta.env.VITE_FORMSUBMIT_INBOX || "info@defendit.in";

export const FORMSUBMIT_AJAX_ENDPOINT = `https://formsubmit.co/ajax/${FORMSUBMIT_INBOX}`;

export function appendFormSubmitDefaults(
  formData: FormData,
  subject: string,
  replyTo?: string,
) {
  formData.append("_subject", subject);
  formData.append("_template", "table");
  formData.append("_captcha", "false");
  formData.append("_honey", "");
  if (replyTo) {
    formData.append("_replyto", replyTo);
  }
}

