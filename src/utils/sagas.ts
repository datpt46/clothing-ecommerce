export function* safe(effect: any): any {
  try {
    return { response: yield effect };
  } catch (error) {
    return { error };
  }
}
