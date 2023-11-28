export function media() {
  return [
    {
      name: "media_image",
      nameOverride: "media-image",
      label: "Image",
      ui: {
        itemProps: (item) => {
          return { label: `Image : ${item?.alt}` }
        },
      },
      fields: [
        {
          type: "image",
          name: "fichier",
          label: "Fichier",
          required: true,
        },
        {
          type: "string",
          name: "alt",
          label: "Texte Alt",
          required: true,
        },
        {
          type: "string",
          name: "credit",
          label: "Crédit",
        },
      ],
    },
    {
      name: "media_vimeo",
      nameOverride: "media-vimeo",
      label: "Vidéo Vimeo",
      fields: [
        {
          type: "string",
          name: "video",
          label: "Vidéo ID",
          required: true,
          ui: {
            description: "L’identifiant de la vidéo.",
          },
        },
      ],
    },
    {
      name: "media_youtube",
      nameOverride: "media-youtube",
      label: "Vidéo YouTube",
      fields: [
        {
          type: "string",
          name: "video",
          label: "Vidéo ID",
          required: true,
          ui: {
            description: "L’identifiant de la vidéo.",
          },
        },
      ],
    },
  ]
}

export function partnerLogo() {
  return [
    {
      type: "string",
      name: "nom",
      label: "Nom",
      required: true,
    },
    {
      type: "image",
      name: "logo",
      label: "Logo",
      required: true,
    },
    {
      type: "string",
      name: "url",
      label: "URL",
    },
  ];
}

export function partnerText() {
  return [
    {
      type: "string",
      name: "nom",
      label: "Nom",
      ui: {
        component: "textarea",
      },
      required: true,
    },
    {
      type: "string",
      name: "url",
      label: "URL",
    },
  ];
}

export function partnersIncluded() {
  return [
    {
      type: "object",
      name: "partenaires",
      label: "Partenaires",
      list: true,
      ui: {
        itemProps: (item) => {
          return { label: item?.section }
        },
      },
      fields: [
        {
          type: "string",
          name: "section",
          label: "Section",
          required: true,
        },
        {
          type: "object",
          list: true,
          templateKey: "template",
          label: "Items",
          name: "items",
          templates: [
            {
              name: "partner_logo",
              nameOverride: "partner-logo",
              fields: partnerLogo(),
              ui: {
                itemProps: (item) => {
                  return { label: `Logo : ${item?.nom}` }
                },
              },
            },
            {
              name: "partner_text",
              nameOverride: "partner-text",
              fields: partnerText(),
              ui: {
                itemProps: (item) => {
                  return { label: `Texte : ${item?.nom}` }
                },
              },
            },
          ],
        },
      ],
    },
  ];
}
