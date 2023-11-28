import { defineConfig } from "tinacms";

import { media } from "./templates";
import { partnersIncluded } from "./templates";

export default defineConfig({
  branch: process.env.HEAD || "main",
  clientId: process.env.TINA_CLIENT_ID,
  token: process.env.TINA_TOKEN,
  client: { skip: true },
  build: {
    outputFolder: "admin",
    publicFolder: "build",
  },
  schema: {
    collections: [

      {
        format: "json",
        label: "Shows",
        name: "shows",
        path: "json",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        match: {
          include: "shows",
        },
        fields: [
          {
            type: "object",
            name: "en",
            label: "English",
            list: true,
            ui: {
              itemProps: (item) => {
                return { label: item?.titre + (item?.archive ? " [ARCHIVÉ]" : "") }
              },
            },
            fields: [
              {
                type: "string",
                name: "saison",
                label: "Season",
                options: [
                  "2021-2022 Season",
                  "2022-2023 Season",
                  "2023-2024 Season",
                  "2024-2025 Season",
                  "2025-2026 Season",
                ],
                required: true,
              },
              {
                type: "string",
                name: "titre",
                label: "Titre",
                required: true,
              },
              {
                type: "string",
                name: "auditoire",
                label: "Auditoire",
                options: ["General Audience", "Youth Audience", "WeeFestival"],
                required: true,
              },
              {
                type: "object",
                name: "dates",
                label: "Dates",
                fields: [
                  {
                    type: "string",
                    name: "debut",
                    label: "Date de début",
                    ui: {
                      component: "date",
                      dateFormat: "YYYY-MM-DD",
                      parse: (value) => value && value.format("YYYY-MM-DD"),
                    },
                  },
                  {
                    type: "string",
                    name: "fin",
                    label: "Date de fin",
                    ui: {
                      component: "date",
                      dateFormat: "YYYY-MM-DD",
                      parse: (value) => value && value.format("YYYY-MM-DD"),
                    },
                  },
                ],
              },
              {
                type: "string",
                name: "billetterie",
                label: "Billetterie",
                ui: {
                  description: "URL de la billetterie.",
                },
              },
              {
                type: "string",
                name: "programme",
                label: "Programme de soirée",
                ui: {
                  description: "URL du programme.",
                },
              },
              {
                type: "string",
                name: "presente_par",
                label: "Présenté par",
              },
              {
                type: "string",
                name: "accessibilite",
                label: "Accessibilité",
              },
              {
                type: "string",
                name: "duree",
                label: "Durée",
              },
              {
                type: "string",
                name: "ages",
                label: "Âges",
              },
              {
                type: "object",
                name: "lieu",
                label: "Lieu",
                fields: [
                  {
                    type: "string",
                    name: "nom",
                    label: "Nom",
                  },
                  {
                    type: "string",
                    name: "url",
                    label: "URL",
                  },
                ],
              },
              {
                type: "string",
                name: "sommaire",
                label: "Sommaire",
                ui: {
                  component: "textarea",
                },
                required: true,
              },
              {
                type: "rich-text",
                name: "description",
                label: "Description",
                required: true,
              },
              {
                type: "rich-text",
                name: "distribution",
                label: "Distribution",
              },
              {
                type: "rich-text",
                name: "equipe",
                label: "Équipe",
              },
              {
                type: "object",
                name: "en_vedette",
                label: "En vedette",
                list: true,
                templateKey: "template",
                templates: media(),
              },
              {
                type: "object",
                name: "en_images",
                label: "En images",
                list: true,
                templateKey: "template",
                templates: media(),
              },
              ...partnersIncluded(),
              {
                type: "boolean",
                name: "archive",
                label: "Archived ?",
              },
              {
                type: "rich-text",
                name: "covid",
                label: "Covid-19",
              },
            ],
          },
        ],
      },

    ],
  },
});
