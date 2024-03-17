// RFC 5322 Official Standard
// see: https://datatracker.ietf.org/doc/html/rfc2822#section-3.4.1 for more details
export const REGEX_EMAIL = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
export const SALT_ROUNDS = 12
