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

class SessionsStore extends LocalStore<ScrollSession[]> {
  create(name: string) {
    const session = createEmptySession(name)
    this.value = [
      ...this.value,
      session
    ];
    return session.id;
  }

  update(session: ScrollSession) {
    this.value = this.value.map((s) =>
      s.id === session.id ? session : s
    );
  }

  remove(id: string) {
    this.value = this.value.filter(
      (s) => s.id !== id
    );
  }

  rename(id: string, name: string) {
    this.value = this.value.map((s) =>
      s.id === id
        ? { ...s, sessionName: name }
        : s
    );
  }
}

export const sessions = new SessionsStore(
  'barony-sessions',
  []
);