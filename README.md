[![Node.js CI](https://github.com/elliottback/SMWS_Codes/actions/workflows/node.js.yml/badge.svg)](https://github.com/elliottback/SMWS_Codes/actions/workflows/node.js.yml)
[![Release](https://github.com/elliottback/SMWS_Codes/actions/workflows/release.yml/badge.svg)](https://github.com/elliottback/SMWS_Codes/actions/workflows/release.yml)

# Single Malt Whisky Society (SMWS) Codes
A module containing data to decode SMWS (Single Malt Whisky Society) Code Numbers.

# What is the release artifact?

A single file, data.json, containing mappings for SMWS codes.

# How do I incorporate this into my project?

You can download `data.json` into your build pipeline, with something like this:

```yaml
      - name: Download artifact smws codes
        uses: dsaltares/fetch-gh-release-asset@0.06
        with:
          token: ${{ secrets.GITHUB_TOKEN }}
          file: "data.json"
          repo: "elliottback/SMWS_Codes"
          target: "./data/data.json"
```

# What format is the data?

A dictionary of dictionaries, the root-level key being the SMWS code, mapping to a dictionary of:

* status - active or inactive
* region - region in Scotland, or the country of origin
* name - the distillery name
* type - single malt, gin, rum, etc

```json
{
  "1": {
    "status": "active",
    "region": "Speyside",
    "name": "Glenfarclas",
    "type": "Single Malt"
  }
}
```

# Notes

When matching say `140.1`, make sure you try to match to the longest key in the dictionary, otherwise you may match `40.1` by mistake.

# Contributions welcome

Please feel free to submit a PR if there is missing/bad data.