/**
 * THIS FILE IS GENERATED BY `yarn generate-integration-docs`.
 *
 * DO NOT EDIT MANUALLY.
 */

import {IntegrationFrontmatter} from '../types';
import kubernetesLogo from './logos/kubernetes.svg';

export const logo = kubernetesLogo;

export const frontmatter: IntegrationFrontmatter = {
  id: 'kubernetes',
  status: 'published',
  name: 'Kubernetes',
  title: 'Dagster & Kubernetes',
  excerpt: 'Launch Kubernetes pods and execute external code directly from Dagster.',
  partnerlink: 'https://kubernetes.io/',
  categories: ['Compute'],
  enabledBy: [],
  enables: [],
  tags: ['dagster-supported', 'compute'],
};

export const content =
  'The `dagster-k8s` integration library provides the `PipesK8sClient` resource, enabling you to launch Kubernetes pods and execute external code directly from Dagster assets and ops. This integration allows you to pass parameters to Kubernetes pods while Dagster receives real-time events, such as logs, asset checks, and asset materializations, from the initiated jobs. With minimal code changes required on the job side, this integration is both efficient and easy to implement.\n\n### Installation\n\n```bash\npip install dagster-k8s\n```\n\n### Example\n\n<CodeExample path="docs_snippets/docs_snippets/integrations/kubernetes.py" language="python" />\n\n### Deploying to Kubernetes?\n\n- Deploying to Dagster+: Use with a Dagster+ Hybrid deployment, the Kubernetes agent executes Dagster jobs on a Kubernetes cluster. Checkout the [Dagster+ Kubernetes Agent](https://docs.dagster.io/dagster-plus/deployment/deployment-types/hybrid/kubernetes/) guide for more information.\n- Deploying to Open Source: Visit the [Deploying Dagster to Kubernetes](https://docs.dagster.io/guides/deploy/deployment-options/kubernetes/) guide for more information.\n\n### About Kubernetes\n\n**Kubernetes** is an open source container orchestration system for automating software deployment, scaling, and management. Google originally designed Kubernetes, but the Cloud Native Computing Foundation now maintains the project.';
