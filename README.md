# medical-word-uuid
generate fun, unique random IDs with medical terms

# usage

`uuid(length, appendNumber)`

`length` - how many words to include. The wordlist is ~93k words so 2 words is 8.649 × 10^9 and 3 is 8.04357 × 10^14.

`appendNumber` - append an additonal 4 digits to the end to bump up uniqueness.

```js
import {uuid} from @redoxengine/medical-word-uuid;
uuid()
'thermocoagulation-superficies'
uuid(3, true)
'envy-pegoxol-spongiositis-7384'
```


Wordlist is from [glutanimate/wordlist-medicalterms-en](https://github.com/glutanimate/wordlist-medicalterms-en)
I removed any with punctuation and lowercased everything
`cat data/wordlist.txt | grep -Eo '^[a-zA-Z0-9]+$' | awk '{print tolower($0)}' |awk '{ printf "\"%s\",\n", $0 }' > src/words.ts`