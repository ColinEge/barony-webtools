import { LocalStore } from '$lib/state/localStore.svelte';
import { SCROLLS } from '$lib/data/scrolls';
import type { ScrollSession } from '$lib/models/scroll';
import { v4 as uuidv4 } from "uuid";

function createEmptySession(name: string): ScrollSession {
  return {
    id: uuidv4(),
    sessionName: name,
    scrolls: SCROLLS.map((s) => ({
      scrollId: s.id,
      inscription: null
    }))
  };
}

function isValidSession(session: any): session is ScrollSession {
  return (
    session &&
    typeof session.id === 'string' &&
    typeof session.sessionName === 'string' &&
    Array.isArray(session.scrolls)
  );
}

class SessionsStore extends LocalStore<ScrollSession[]> {
  create(name: string): string {
    const session = createEmptySession(name)
    this.value = [
      ...this.value,
      session
    ];
    return session.id;
  }

  update(session: ScrollSession): boolean {
    this.value = this.value.map((s) =>
      s.id === session.id ? session : s
    );
    return true;
  }

  remove(id: string): boolean {
    this.value = this.value.filter(
      (s) => s.id !== id
    );
    return true;
  }

  rename(id: string, name: string): boolean {
    const session = this.value.find((s) => s.id === id);
    if (!session) return false;
    if (session.sessionName === name) return false;
    this.value = this.value.map((s) =>
      s.id === id ? { ...s, sessionName: name } : s
    );
    return true;
  }

  import(session: unknown): string | null {
    if (!isValidSession(session)) { return null; }
    const safeSession: ScrollSession = {
      ...session,
      id: crypto.randomUUID()
    };
    this.value = [...this.value, safeSession];
    return safeSession.id;
  }
}

export const sessions = new SessionsStore(
  'barony-sessions',
  []
);