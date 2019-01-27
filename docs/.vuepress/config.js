var pkginfo = require("../../package.json");

module.exports = {
  title: "SiteWhere",
  description:
    "SiteWhere CE " + pkginfo.version.toUpperCase() + " Documentation",
  head: [
    ["link", { rel: "icon", href: "/images/favicon.ico" }],
    [
      "link",
      {
        rel: "stylesheet",
        href: "https://use.fontawesome.com/releases/v5.6.3/css/all.css",
        integrity:
          "sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/",
        crossorigin: "anonymous"
      }
    ]
  ],
  dest: "dist",
  base: "/docs/" + pkginfo.version + "/",
  ga: "UA-122806506-1",
  locales: {
    "/": {
      lang: "en-US",
      title: "SiteWhere CE " + pkginfo.version.toUpperCase() + " Documentation",
      description:
        "SiteWhere CE " + pkginfo.version.toUpperCase() + " Documentation"
    },
    "/es/": {
      lang: "es",
      title: "Documentación SiteWhere CE " + pkginfo.version.toUpperCase(),
      description:
        "SiteWhere CE " + pkginfo.version.toUpperCase() + " Documentation"
    }
  },
  markdown: {
    config: md => {
      md.use(require("markdown-it-fontawesome"));
    }
  },
  themeConfig: {
    logo: "/images/logo.svg",
    sidebar: {
      "/platform/": [
        "",
        "architecture",
        "objectmodel",
        "features",
        "microservice-overview",
        "twelve-factor"
      ],
      "/guide/architecture/": ["configuration-management"],
      "/guide/deployment/": ["", "common-issues", "backup-restore"],
      "/guide/administration/": ["", "global/", "tenant/"],
      "/guide/devices/": ["sending-data", "android", "kura"],
      "/guide/microservices/": [
        "asset-management/",
        "batch-operations/",
        "command-delivery/",
        "device-management/",
        "device-registration/",
        "device-state/",
        "event-management/",
        "event-search/",
        "event-sources/",
        "inbound-processing/",
        "instance-management/",
        "label-generation/",
        "outbound-connectors/",
        "rule-processing/",
        "schedule-management/",
        "streaming-media/",
        "tenant-management/",
        "user-management/",
        "web-rest/"
      ],
      "/guide/": [
        "architecture/",
        "deployment/",
        "administration/",
        "devices/",
        "microservices/"
      ],
      "/deployment/": [""],
      "/development/": [""]
    },
    locales: {
      "/": {
        label: "English",
        selectText: "Languages",
        editLinkText: "Edit this page on GitHub",
        lastUpdated: "Last Updated",
        nav: [
          { text: "Platform", link: "/platform/" },
          { text: "Installation", link: "/deployment/" },
          {
            text: "User Guides",
            items: [
              {
                text: "Architecture Guide",
                link: "/guide/architecture/"
              },
              { text: "Deployment Guide", link: "/guide/deployment/" },
              {
                text: "System Administration Guide",
                link: "/guide/administration/"
              },
              {
                text: "Device Interaction Guides",
                link: "/guide/devices/"
              },
              {
                text: "Microservice Guides",
                link: "/guide/microservices/"
              }
            ]
          },
          { text: "Development", link: "/development/" }
        ]
      },
      "/es/": {
        label: "Español",
        selectText: "Idiomas",
        editLinkText: "Edita esta página en GitHub",
        lastUpdated: "Última actualización",
        nav: [
          { text: "Plataforma", link: "/es/platform/" },
          { text: "Guía del usuario", link: "/es/guide/" },
          { text: "Despliegue", link: "/es/deployment/" },
          { text: "Desarrollo", link: "/es/development/" }
        ],
        sidebar: {
          "/es/platform/": [
            "",
            "architecture",
            "features",
            "microservice-overview",
            "twelve-factor"
          ],
          "/es/guide/devices/": ["sending-data", "android", "kura"],
          "/es/guide/microservices/": [
            "asset-management",
            "batch-operations",
            "command-delivery",
            "device-management",
            "device-registration",
            "device-state",
            "event-management",
            "event-search",
            "event-sources",
            "inbound-processing",
            "instance-management",
            "label-generation",
            "outbound-connectors",
            "rule-processing",
            "schedule-management",
            "streaming-media",
            "tenant-management",
            "user-management",
            "web-rest"
          ],
          "/es/guide/": ["", "devices/", "microservices/"],
          "/es/deployment/": [""],
          "/es/development/": [""]
        }
      }
    },
    repo: "sitewhere/sitewhere-documentation",
    docsDir: "docs",
    docsBranch: "sitewhere-" + pkginfo.version,
    editLinks: true,
    editLinkText: "Help us improve this page!"
  },
  chainWebpack(config) {
    config.resolve.alias.set("vue", "vue/dist/vue.common.js");
  }
};
