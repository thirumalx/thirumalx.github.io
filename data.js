const projects = [
    // Java & Spring Ecosystem
    {
        name: "certx",
        description: "Certificate management and automation tool.",
        url: "https://github.com/thirumalx/certx",
        category: "Java & Spring",
        tags: ["Java", "Spring Boot", "Security"]
    },
    {
        name: "spring-cloud-config-server",
        description: "Centralized configuration management for distributed systems.",
        url: "https://github.com/thirumalx/spring-cloud-config-server",
        category: "Java & Spring",
        tags: ["Spring Cloud", "Config Server"]
    },
    {
        name: "spring-cloud-config-client",
        description: "Client application for Spring Cloud Config.",
        url: "https://github.com/thirumalx/spring-cloud-config-client",
        category: "Java & Spring",
        tags: ["Spring Cloud", "Config Client"]
    },
    {
        name: "spring-cloud-gateway",
        description: "API Gateway built on top of the Spring Ecosystem.",
        url: "https://github.com/thirumalx/spring-cloud-gateway",
        category: "Java & Spring",
        tags: ["Spring Cloud", "Gateway"]
    },
    {
        name: "eureka-server",
        description: "Service discovery server using Netflix Eureka.",
        url: "https://github.com/thirumalx/eureka-server",
        category: "Java & Spring",
        tags: ["Spring Cloud", "Eureka"]
    },
    {
        name: "eureka-client-1",
        description: "Sample Eureka client service.",
        url: "https://github.com/thirumalx/eureka-client-1",
        category: "Java & Spring",
        tags: ["Spring Cloud", "Eureka"]
    },
    {
        name: "eureka-client-2",
        description: "Another sample Eureka client service.",
        url: "https://github.com/thirumalx/eureka-client-2",
        category: "Java & Spring",
        tags: ["Spring Cloud", "Eureka"]
    },
    {
        name: "oauth-authorization-server",
        description: "OAuth2 Authorization Server implementation.",
        url: "https://github.com/thirumalx/oauth-authorization-server",
        category: "Java & Spring",
        tags: ["OAuth2", "Security", "Spring Security"]
    },
    {
        name: "oauth2-bff",
        description: "Backend for Frontend (BFF) pattern with OAuth2.",
        url: "https://github.com/thirumalx/oauth2-bff",
        category: "Java & Spring",
        tags: ["OAuth2", "BFF", "Security"]
    },
    {
        name: "spring-boot-transaction",
        description: "Demonstration of transaction management in Spring Boot.",
        url: "https://github.com/thirumalx/spring-boot-transaction",
        category: "Java & Spring",
        tags: ["Spring Boot", "Transactions"]
    },
    {
        name: "spring-bind-custom-validation",
        description: "Custom validation binding in Spring.",
        url: "https://github.com/thirumalx/spring-bind-custom-validation",
        category: "Java & Spring",
        tags: ["Spring MVC", "Validation"]
    },
    {
        name: "spring-ai",
        description: "Exploration of Spring AI capabilities.",
        url: "https://github.com/thirumalx/spring-ai",
        category: "Java & Spring",
        tags: ["AI", "Spring"]
    },

    // Security & Cryptography
    {
        name: "cryptography",
        description: "Cryptography concepts and implementations.",
        url: "https://github.com/thirumalx/cryptography",
        category: "Security",
        tags: ["Cryptography", "Security"]
    },
    {
        name: "cryptography-playground",
        description: "Playground for testing cryptographic algorithms.",
        url: "https://github.com/thirumalx/cryptography-playground",
        category: "Security",
        tags: ["Cryptography", "Playground"]
    },

    // DevOps & Tools
    {
        name: "docker-files",
        description: "Collection of useful Dockerfiles.",
        url: "https://github.com/thirumalx/docker-files",
        category: "DevOps",
        tags: ["Docker", "DevOps"]
    },
    {
        name: "bash-script",
        description: "Useful Bash scripts for automation.",
        url: "https://github.com/thirumalx/bash-script",
        category: "DevOps",
        tags: ["Bash", "Scripting"]
    },
    {
        name: "db-env-diff-tool",
        description: "Tool to compare database environments.",
        url: "https://github.com/thirumalx/db-env-diff-tool",
        category: "DevOps",
        tags: ["Database", "Tools"]
    },
    {
        name: "excel-to-ics",
        description: "Convert Excel schedules to ICS calendar format.",
        url: "https://github.com/thirumalx/excel-to-ics",
        category: "DevOps",
        tags: ["Tools", "Conversion"]
    },
    {
        name: "DowntimeHQ",
        description: "Downtime monitoring and management.",
        url: "https://github.com/thirumalx/DowntimeHQ",
        category: "DevOps",
        tags: ["Monitoring", "Ops"]
    },

    // Web & Full Stack
    {
        name: "auth-service-ui",
        description: "User Interface for the Auth Service.",
        url: "https://github.com/thirumalx/auth-service-ui",
        category: "Web",
        tags: ["UI", "Auth"]
    },
    {
        name: "opencalendar",
        description: "Open source calendar application.",
        url: "https://github.com/thirumalx/opencalendar",
        category: "Web",
        tags: ["Calendar", "Web App"]
    },
    {
        name: "html-css-javascript",
        description: "Web development experiments and snippets.",
        url: "https://github.com/thirumalx/html-css-javascript",
        category: "Web",
        tags: ["HTML", "CSS", "JS"]
    },
    {
        name: "selenium",
        description: "Browser automation tests with Selenium.",
        url: "https://github.com/thirumalx/selenium",
        category: "Web",
        tags: ["Testing", "Selenium"]
    },

    // Learning & Tutorials
    {
        name: "system-design",
        description: "Resources and notes on System Design.",
        url: "https://github.com/thirumalx/system-design",
        category: "Learning",
        tags: ["System Design", "Architecture"]
    },
    {
        name: "java-learning",
        description: "Java learning path and examples.",
        url: "https://github.com/thirumalx/java-learning",
        category: "Learning",
        tags: ["Java", "Tutorials"]
    },
    {
        name: "anchor-modeling-tutorial",
        description: "Tutorial on Anchor Modeling database technique.",
        url: "https://github.com/thirumalx/anchor-modeling-tutorial",
        category: "Learning",
        tags: ["Database", "Modeling"]
    },
    {
        name: "postgresql",
        description: "PostgreSQL tips, tricks, and examples.",
        url: "https://github.com/thirumalx/postgresql",
        category: "Learning",
        tags: ["PostgreSQL", "Database"]
    },
    {
        name: "linux-guide",
        description: "Guide to Linux commands and administration.",
        url: "https://github.com/thirumalx/linux-guide",
        category: "Learning",
        tags: ["Linux", "OS"]
    },
    {
        name: "installation_guide",
        description: "Installation guides for various software.",
        url: "https://github.com/thirumalx/installation_guide",
        category: "Learning",
        tags: ["Guides", "Setup"]
    }
];
