# tinacms-discussion-4375

### Install

    npm install

### Start

    npm run dev

### View

    http://localhost:4001/admin/index.html

### Reproduce

Go to section **Shows** in TinaCMS. Edit any entry. Save JSON document. Check `git diff` and you'll find 3 of the boolean attributes set to `true` have been deleted from the document.
