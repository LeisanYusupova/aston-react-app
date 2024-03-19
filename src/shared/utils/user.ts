export function getCurrentUser(): string | null {
  return localStorage.getItem('currentUser');
}

export function setCurrentUser(email: string): void {
  localStorage.setItem('currentUser', email);
}
