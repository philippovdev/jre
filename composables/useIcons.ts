import type { Component } from 'vue';
import { reactive } from 'vue';

const files: { [key: string]: unknown } = import.meta.globEager('/assets/icons/*.svg');

export default function useIcons() {
  const icons: { name: string; component: Component }[] = reactive([]);
  for (const path in files) {
    const component = files[path] as Component;
    const name = path.replace('/assets/icons/', '').replace('-icon.svg', '');
    icons.push({ name, component });
  }
  /**
   * Get a single icon component by name
   */
  const findIcon = (name: string | null) => {
    return icons.find(icon => icon.name === name)?.component;
  };

  return { icons, findIcon };
}
