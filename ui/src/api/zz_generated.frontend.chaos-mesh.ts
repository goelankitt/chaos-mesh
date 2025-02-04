import { ExperimentKind } from 'components/NewExperiment/types'

const mapping = new Map<ExperimentKind, string>([
  ['AWSChaos', 'awsChaos'],
  ['DNSChaos', 'dnsChaos'],
  ['GCPChaos', 'gcpChaos'],
  ['HTTPChaos', 'httpChaos'],
  ['IOChaos', 'ioChaos'],
  ['JVMChaos', 'jvmChaos'],
  ['KernelChaos', 'kernelChaos'],
  ['NetworkChaos', 'networkChaos'],
  ['PodChaos', 'podChaos'],
  ['StressChaos', 'stressChaos'],
  ['TimeChaos', 'timeChaos'],
])

export function templateTypeToFieldName(templateType: ExperimentKind): string {
  return mapping.get(templateType)!
}
