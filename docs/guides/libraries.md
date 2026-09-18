---
title: "Zuora client libraries"
sidebarTitle: "Libraries"
description: "Introduces all client libraries Zuora offers."
---
Zuora client libraries (also known as SDKs) make it easy for developers to start using and integrating with the Zuora REST APIs.

This section contains the installation instructions to access these libraries in several popular server-side programming languages.


For the sample codes in different use cases, see [Tutorials](/docs/get-started/tutorials).

## Access Zuora client libraries

### Java library

#### Maven

We provide a Java library, which you can use by adding the following dependency to the `pom.xml` file of your project:

```xml pom.xml
<dependency>
    <groupId>com.zuora.sdk</groupId>
    <artifactId>zuora-sdk-java</artifactId>
    <version>$version</version>
</dependency>
```

Make sure to replace `$version` with the latest <a href="https://mvnrepository.com/artifact/com.zuora.sdk/zuora-sdk-java" target="_blank">Zuora Java library</a> version.

See [Java library reference documentation](/sdk-references/java-sdk-reference) for detailed classes and methods in Java client library.

#### Gradle

Add `zuora-sdk-java` to the dependencies block of your `build.gradle` file:

```shell build.gradle
dependencies {
  implementation("com.zuora.sdk:zuora-sdk-java:$version")
  // ...
}
```

Make sure to replace `$version` with the latest <a href="https://mvnrepository.com/artifact/com.zuora.sdk/zuora-sdk-java" target="_blank">Zuora Java library</a> version.

See [Java library reference documentation](/sdk-references/java-sdk-reference) for detailed classes and methods in Java client library.

### Node.js library

Install the Zuora Node.js library by running the following command:

```shell terminal
npm i zuora-sdk-js
```

For more information about Zuora Node.js libraries, check <a href="https://www.npmjs.com/package/zuora-sdk-js" target="_blank">Zuora JS SDK</a>.

See [Node.js library reference documentation](/sdk-references/node-sdk-reference) for detailed classes and methods in Node.js client library.


### Python library

Install the Zuora Python library by running the following command:

```shell terminal
pip install zuora-sdk
```

For latest released versions of the Zuora Python library, check <a href="https://pypi.org/project/zuora-sdk/#history" target="_blank">Zuora Python SDK - Release history</a>.

See [Python library reference documentation](/sdk-references/python-sdk-reference) for detailed classes and methods in Python client library.

### C# library

#### Using .NET Core CLI

Install the Zuora C# library by running the following .NET Core CLI command:

```shell terminal
dotnet add package ZuoraSDK
```

#### Using NuGet CLI

Install the Zuora C# library by running the following NuGet CLI command:

```shell terminal
nuget install ZuoraSDK
```

For more information about installing NuGet CLI, see <a href="https://learn.microsoft.com/en-us/nuget/reference/nuget-exe-cli-reference" target="_blank">Nuget CLI installation documentation</a>.


#### Using the Package Manager Console

Install the Zuora C# library by using the Visual Studio <a href="https://docs.microsoft.com/en-us/nuget/tools/package-manager-console" target="_blank">NuGet Package Manager Console</a>:

```shell terminal
Install-Package ZuoraSDK
```

#### Install within the Visual Studio

You can choose to install Zuora C# client library within Visual Studio by following the steps below. For more information about installing a package within Visual Studio, see <a href="https://learn.microsoft.com/en-us/nuget/consume-packages/install-use-packages-visual-studio" target="_blank">Install and manage packages in Visual Studio</a>.

1. Open the **Solution Explorer** in Visual Studio.
2. Right-click on a project within your solution.
3. Click **Manage NuGet Packages**.
4. Click the **Browse** tab and search for `ZuoraSDK`.
5. Select the **ZuoraSDK** package, then select the appropriate version in the right-tab and click **Install**.


For latest released versions of the Zuora C# library, check <a href="https://www.nuget.org/packages/ZuoraSDK/" target="_blank">Zuora C# SDK on NuGet</a>.

See [C# library reference documentation](/sdk-references/csharp-sdk-reference) for detailed classes and methods in the C# client library.


## Limitations

- The Zuora client libraries do not provide support for Zephr and Togai.
- The Zuora client libraries do not support the following API operations:
  - [Prepaid with Drawdown](/v1-api-reference/api/prepaid-with-drawdown/post_reverserollover)
  - [Payment Profiles](/v1-api-reference/api/payment-profiles/upsertpaymentprofiles)
  - [SCIM](/v1-api-reference/api/scim/getlistgroups)
  - [API Health](/v1-api-reference/api/api-health/get_systemhealthapivolumesummary)
  - [Bill Run Health](/v1-api-reference/api/bill-run-health/get_systemhealthbillingdocvolumesummary)
  - [Electronic Payments Health](/v1-api-reference/api/electronic-payments-health/get_systemhealthpaymentvolumesummary)
  - [Tax Health](/v1-api-reference/api/tax-health/getsystemhealthtaxrecords)
