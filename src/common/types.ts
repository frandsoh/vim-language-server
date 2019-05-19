import { Subscription} from 'rxjs';
import { CompletionItem } from 'vscode-languageserver';

export interface IParserHandles {
  [uri: string]: Subscription | undefined
}

// initialization options
export interface IConfig {
  iskeyword: string
  vimruntime: string
  runtimepath: string[]
}

// builtin-doc
export interface BuiltinDoc {
  completionItems: {
    functions: CompletionItem[]
    commands: CompletionItem[]
    options: CompletionItem[]
    variables: CompletionItem[]
    features: CompletionItem[]
    expandKeywords: CompletionItem[]
  }
  signatureHelp: Record<string, string[]>
  documents: {
    functions: Record<string, string[]>
    commands: Record<string, string[]>
    options: Record<string, string[]>
    variables: Record<string, string[]>
    features: Record<string, string[]>
    expandKeywords: Record<string, string[]>
  }
}