type ProgrammingLanguage = "javascript" | "python" | "java";

const sampleTexts: Record<"javascript" | "python" | "java", string[]> = {
    javascript: [
      "const greet = (name) => `Hello, ${name}`;",
      "for (let i = 0; i < 5; i++) { console.log(i); }",
      "function sum(a, b) { return a + b; }",
      "const numbers = [1, 2, 3];",
      "console.log('Hello, World!');",
    ],
    python: [
      "def greet(name): return f'Hello, {name}'",
      "for i in range(5): print(i)",
      "def sum(a, b): return a + b",
      "numbers = [1, 2, 3]",
      "print('Hello, World!')",
    ],
    java: [
      "public class Main { public static void main(String[] args) { System.out.println(\"Hello, World!\"); } }",
      "for (int i = 0; i < 5; i++) { System.out.println(i); }",
      "int sum(int a, int b) { return a + b; }",
      "int[] numbers = {1, 2, 3};",
      "System.out.println(\"Welcome to Java\");",
    ],
  };
  
export function generateRandomText(language: ProgrammingLanguage): string {
  const texts = sampleTexts[language];
  const randomIndex = Math.floor(Math.random() * texts.length);
  return texts[randomIndex];
}
